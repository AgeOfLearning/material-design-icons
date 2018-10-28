import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter6Element
 * @class IconRoundFilter6Element
 * @extends {AoflElement}
 */
class IconRoundFilter6Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter6Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-6';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter6Element.is, IconRoundFilter6Element);

export default IconRoundFilter6Element;
