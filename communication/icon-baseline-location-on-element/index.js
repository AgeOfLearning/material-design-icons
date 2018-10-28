import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineLocationOnElement
 * @class IconBaselineLocationOnElement
 * @extends {AoflElement}
 */
class IconBaselineLocationOnElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineLocationOnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-location-on';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineLocationOnElement.is, IconBaselineLocationOnElement);

export default IconBaselineLocationOnElement;
