import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconTwotoneShortTextElement
 * @class IconTwotoneShortTextElement
 * @extends {AoflElement}
 */
class IconTwotoneShortTextElement extends AoflElement {
  /**
   * Creates an instance of IconTwotoneShortTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-twotone-short-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconTwotoneShortTextElement.is, IconTwotoneShortTextElement);

export default IconTwotoneShortTextElement;
