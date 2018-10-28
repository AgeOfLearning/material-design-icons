import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineHttpsElement
 * @class IconBaselineHttpsElement
 * @extends {AoflElement}
 */
class IconBaselineHttpsElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineHttpsElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-https';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineHttpsElement.is, IconBaselineHttpsElement);

export default IconBaselineHttpsElement;
