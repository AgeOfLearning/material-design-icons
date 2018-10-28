import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineThumbsUpDownElement
 * @class IconBaselineThumbsUpDownElement
 * @extends {AoflElement}
 */
class IconBaselineThumbsUpDownElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineThumbsUpDownElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-thumbs-up-down';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineThumbsUpDownElement.is, IconBaselineThumbsUpDownElement);

export default IconBaselineThumbsUpDownElement;
