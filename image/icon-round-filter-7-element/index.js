import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter7Element
 * @class IconRoundFilter7Element
 * @extends {AoflElement}
 */
class IconRoundFilter7Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter7Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-7';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter7Element.is, IconRoundFilter7Element);

export default IconRoundFilter7Element;
