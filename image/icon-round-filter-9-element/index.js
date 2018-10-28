import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter9Element
 * @class IconRoundFilter9Element
 * @extends {AoflElement}
 */
class IconRoundFilter9Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter9Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-9';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter9Element.is, IconRoundFilter9Element);

export default IconRoundFilter9Element;
