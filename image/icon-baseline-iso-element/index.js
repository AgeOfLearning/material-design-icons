import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineIsoElement
 * @class IconBaselineIsoElement
 * @extends {AoflElement}
 */
class IconBaselineIsoElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineIsoElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-iso';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineIsoElement.is, IconBaselineIsoElement);

export default IconBaselineIsoElement;
