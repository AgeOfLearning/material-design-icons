import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter2Element
 * @class IconRoundFilter2Element
 * @extends {AoflElement}
 */
class IconRoundFilter2Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter2Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-2';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter2Element.is, IconRoundFilter2Element);

export default IconRoundFilter2Element;
