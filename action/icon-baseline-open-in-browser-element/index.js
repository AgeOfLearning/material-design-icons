import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineOpenInBrowserElement
 * @class IconBaselineOpenInBrowserElement
 * @extends {AoflElement}
 */
class IconBaselineOpenInBrowserElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineOpenInBrowserElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-open-in-browser';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineOpenInBrowserElement.is, IconBaselineOpenInBrowserElement);

export default IconBaselineOpenInBrowserElement;
