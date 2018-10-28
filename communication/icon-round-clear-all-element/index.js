import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundClearAllElement
 * @class IconRoundClearAllElement
 * @extends {AoflElement}
 */
class IconRoundClearAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundClearAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-clear-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundClearAllElement.is, IconRoundClearAllElement);

export default IconRoundClearAllElement;
