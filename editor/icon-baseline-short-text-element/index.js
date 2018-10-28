import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconBaselineShortTextElement
 * @class IconBaselineShortTextElement
 * @extends {AoflElement}
 */
class IconBaselineShortTextElement extends AoflElement {
  /**
   * Creates an instance of IconBaselineShortTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-baseline-short-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconBaselineShortTextElement.is, IconBaselineShortTextElement);

export default IconBaselineShortTextElement;
