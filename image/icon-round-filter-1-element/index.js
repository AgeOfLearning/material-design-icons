import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilter1Element
 * @class IconRoundFilter1Element
 * @extends {AoflElement}
 */
class IconRoundFilter1Element extends AoflElement {
  /**
   * Creates an instance of IconRoundFilter1Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter-1';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilter1Element.is, IconRoundFilter1Element);

export default IconRoundFilter1Element;
