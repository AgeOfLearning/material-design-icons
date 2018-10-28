import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundWrapTextElement
 * @class IconRoundWrapTextElement
 * @extends {AoflElement}
 */
class IconRoundWrapTextElement extends AoflElement {
  /**
   * Creates an instance of IconRoundWrapTextElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-wrap-text';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundWrapTextElement.is, IconRoundWrapTextElement);

export default IconRoundWrapTextElement;
