import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineMapElement
 * @class IconBaselineMapElement
 * @extends {AoflElement}
 */
class IconBaselineMapElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineMapElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-map';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineMapElement.is, IconBaselineMapElement);

export default IconBaselineMapElement;
