import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocationOffElement
 * @class IconBaselineLocationOffElement
 * @extends {AoflElement}
 */
class IconBaselineLocationOffElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocationOffElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-location-off';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocationOffElement.is, IconBaselineLocationOffElement);

export default IconBaselineLocationOffElement;
