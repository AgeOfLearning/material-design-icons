import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundSelectAllElement
 * @class IconRoundSelectAllElement
 * @extends {AoflElement}
 */
class IconRoundSelectAllElement extends AoflElement {
  /**
   * Creates an instance of IconRoundSelectAllElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-select-all';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundSelectAllElement.is, IconRoundSelectAllElement);

export default IconRoundSelectAllElement;
