import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMailElement
 * @class IconRoundMailElement
 * @extends {AoflElement}
 */
class IconRoundMailElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMailElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-mail';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMailElement.is, IconRoundMailElement);

export default IconRoundMailElement;
