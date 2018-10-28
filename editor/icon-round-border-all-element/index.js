import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBorderAllElement
 * @class IconRoundBorderAllElement
 * @extends {AoflElement}
 */
class IconRoundBorderAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBorderAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-border-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBorderAllElement.is, IconRoundBorderAllElement);

export default IconRoundBorderAllElement;
