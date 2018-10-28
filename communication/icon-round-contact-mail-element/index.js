import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundContactMailElement
 * @class IconRoundContactMailElement
 * @extends {AoflElement}
 */
class IconRoundContactMailElement extends AoflElement {
  /**
   * Creates an instance of IconRoundContactMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-contact-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundContactMailElement.is, IconRoundContactMailElement);

export default IconRoundContactMailElement;
