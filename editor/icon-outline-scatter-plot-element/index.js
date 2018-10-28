import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconOutlineScatterPlotElement
 * @class IconOutlineScatterPlotElement
 * @extends {AoflElement}
 */
class IconOutlineScatterPlotElement extends AoflElement {
  /**
   * Creates an instance of IconOutlineScatterPlotElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-outline-scatter-plot';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconOutlineScatterPlotElement.is, IconOutlineScatterPlotElement);

export default IconOutlineScatterPlotElement;
