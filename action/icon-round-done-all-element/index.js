import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDoneAllElement
 * @class IconRoundDoneAllElement
 * @extends {AoflElement}
 */
class IconRoundDoneAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDoneAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-done-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDoneAllElement.is, IconRoundDoneAllElement);

export default IconRoundDoneAllElement;
