---
publishDate: 2026-09-21T00:00:00Z
author: Joseph Otieno Ouma
title: "Africa's spatial data deficit is a production deficit"
excerpt: Most counties can already display a map. Far fewer can produce an elevation model or orthomosaic and say how accurate it is. That is where the next gains are.
image: ~/assets/images/agg/drone-field-day.jpg
imageAlt: Survey drone on a field before a mapping flight
category: UAV mapping
tags:
  - photogrammetry
  - accuracy
  - UAV
---

Dashboards and web maps have become easy. Open platforms will render almost any layer you give them. What remains hard, and what most planning offices still buy in from outside, is producing the underlying data: elevation models, orthomosaics and parcel boundaries with a known accuracy.

## Why accuracy statements matter

A drone survey processed with structure-from-motion software will always return a model. Without surveyed ground control and independent check points, nobody can say whether that model is good to five centimetres or fifty. For drainage design, erosion monitoring or boundary work, the difference decides whether the data can be used at all.

## What good practice looks like

- **Plan the control before the flight.** A handful of well-distributed GNSS ground control points, plus separate check points that are never used in the adjustment.
- **Report the error, not just the picture.** Horizontal and vertical RMSE against the check points belongs on the deliverable.
- **Calibrate or at least characterise the camera.** Consumer sensors drift; self-calibration results should be inspected, not accepted blindly.
- **Keep the processing chain open.** Tools such as OpenDroneMap, QGIS and PostGIS let a county repeat the work without licence fees.

## Where this is heading

Low-cost RTK and PPK receivers on small aircraft, and UAV LiDAR for vegetated terrain, are closing the gap between what a national mapping agency can produce and what a county or utility can produce for itself. The limiting factor is no longer hardware. It is people trained to design a survey and defend its accuracy.

If you are planning a UAV survey and want a second opinion on the control design, [get in touch](/contact).
