import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineScatterPlotElement
 * @class IconBaselineScatterPlotElement
 * @extends {AoflElement}
 */
class IconBaselineScatterPlotElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineScatterPlotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-scatter-plot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineScatterPlotElement.is, IconBaselineScatterPlotElement);

export default IconBaselineScatterPlotElement;
