---
publishDate: 2026-09-07T00:00:00Z
author: Joseph Otieno Ouma
title: Mapping floods when the sky is closed
excerpt: Around Lake Victoria the floods arrive with the cloud, which is exactly when optical satellites see nothing. Radar does not have that problem.
image: ~/assets/images/agg/vegetation-stress.png
imageAlt: Time-lagged cross-correlation between vegetation indices and soil moisture
category: Earth observation
tags:
  - SAR
  - Sentinel-1
  - floods
  - Google Earth Engine
---

Optical imagery from Sentinel-2 or Landsat is the default for most environmental mapping. During a flood it is frequently useless: the same weather system that raises the rivers hides them from the sensor.

## What radar sees

Synthetic aperture radar, such as Sentinel-1's C-band instrument, supplies its own illumination and passes through cloud. Calm open water reflects the signal away from the sensor and appears dark, so newly flooded land shows up as a sharp drop in backscatter between a pre-event and a post-event image.

## A workable recipe

1. Build a dry-season reference from several Sentinel-1 scenes in the same orbit.
2. Compare the event image against it and threshold the change.
3. Mask permanent water, steep slopes and radar shadow using a terrain model.
4. Check the result against whatever ground truth exists: photographs, gauge readings, local reports.

All four steps run in Google Earth Engine in minutes, at no data cost.

## Known limits

Flooded vegetation and flooded streets behave differently from open water, and can brighten instead of darken. Wind roughens water surfaces. Results in papyrus wetlands and dense settlements therefore need particular care, and an honest statement of uncertainty.

## Why it matters for counties

A flood extent map delivered within a day or two of the event helps target relief. A stack of them over several seasons shows where the water returns, which is what planners and insurers need. Newer L-band missions such as NISAR will improve performance under vegetation in the coming years.
