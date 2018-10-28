import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooks3Element
 * @class IconRoundLooks3Element
 * @extends {AoflElement}
 */
class IconRoundLooks3Element extends AoflElement {
  /**
   * Creates an instance of IconRoundLooks3Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-3';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooks3Element.is, IconRoundLooks3Element);

export default IconRoundLooks3Element;
