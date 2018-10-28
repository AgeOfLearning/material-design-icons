import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundShortTextElement
 * @class IconRoundShortTextElement
 * @extends {AoflElement}
 */
class IconRoundShortTextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundShortTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-short-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundShortTextElement.is, IconRoundShortTextElement);

export default IconRoundShortTextElement;
