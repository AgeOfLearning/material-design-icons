import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTextRotateUpElement
 * @class IconRoundTextRotateUpElement
 * @extends {AoflElement}
 */
class IconRoundTextRotateUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTextRotateUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-text-rotate-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTextRotateUpElement.is, IconRoundTextRotateUpElement);

export default IconRoundTextRotateUpElement;
