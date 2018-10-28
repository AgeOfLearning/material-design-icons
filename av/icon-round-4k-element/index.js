import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRound4KElement
 * @class IconRound4KElement
 * @extends {AoflElement}
 */
class IconRound4KElement extends AoflElement {
  /**
   * Creates an instance of IconRound4KElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-4k';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRound4KElement.is, IconRound4KElement);

export default IconRound4KElement;
