/**
 * Created by Wangchenyan on 2018/6/14.
 */
export function setLinePoints (iterations) {
  var pointList = {}
  pointList.first = {
    x: 0,
    y: 1
  }
  var lastPoint = {
    x: 1,
    y: 1
  }
  var minY = 1
  var maxY = 1
  var point
  var nextPoint
  var dx, newX, newY

  pointList.first.next = lastPoint
  for (var i = 0; i < iterations; i++) {
    point = pointList.first
    while (point.next != null) {
      nextPoint = point.next

      dx = nextPoint.x - point.x
      newX = 0.5 * (point.x + nextPoint.x)
      newY = 0.5 * (point.y + nextPoint.y)
      newY += dx * (Math.random() * 2 - 1)

      var newPoint = {
        x: newX,
        y: newY
      }

      //min, max
      if (newY < minY) {
        minY = newY
      } else if (newY > maxY) {
        maxY = newY
      }

      //put between points
      newPoint.next = nextPoint
      point.next = newPoint

      point = nextPoint
    }
  }

  var normalizeRate = 1 / (maxY - minY)
  point = pointList.first
  while (point != null) {
    point.y = normalizeRate * (point.y - minY)
    point = point.next
  }

  return pointList
}

export function drawCircle (context,centerX, centerY, minRad, maxRad, phase,rgb) {
  var point
  var rad, theta
  var twoPi = 2 * Math.PI
  var x0, y0

  //生成分形细分顶点链表，用来获取随机半径, 9次迭代将返回512个顶点。
  var pointList = setLinePoints(9)
  context.strokeStyle = rgb
  context.lineWidth = 1.01
  context.fillStyle = rgb
  context.beginPath()
  point = pointList.first
  theta = phase
  rad = minRad + point.y * (maxRad - minRad)
  x0 = centerX + rad * Math.cos(theta)
  y0 = centerY + rad * Math.sin(theta)
  context.lineTo(x0, y0)
  while (point.next != null) {
    point = point.next
    theta = twoPi * point.x + phase
    rad = minRad + point.y * (maxRad - minRad)
    x0 = centerX + rad * Math.cos(theta)
    y0 = centerY + rad * Math.sin(theta)
    context.lineTo(x0, y0)
  }
  context.stroke()
  context.fill()
}
