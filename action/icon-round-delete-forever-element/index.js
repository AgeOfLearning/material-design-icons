import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDeleteForeverElement
 * @class IconRoundDeleteForeverElement
 * @extends {AoflElement}
 */
class IconRoundDeleteForeverElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDeleteForeverElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-delete-forever';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDeleteForeverElement.is, IconRoundDeleteForeverElement);

export default IconRoundDeleteForeverElement;
