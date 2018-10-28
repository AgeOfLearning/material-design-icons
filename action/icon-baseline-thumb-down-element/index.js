import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineThumbDownElement
 * @class IconBaselineThumbDownElement
 * @extends {AoflElement}
 */
class IconBaselineThumbDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineThumbDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-thumb-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineThumbDownElement.is, IconBaselineThumbDownElement);

export default IconBaselineThumbDownElement;
