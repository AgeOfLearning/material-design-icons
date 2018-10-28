import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooks5Element
 * @class IconRoundLooks5Element
 * @extends {AoflElement}
 */
class IconRoundLooks5Element extends AoflElement {
  /**
   * Creates an instance of IconRoundLooks5Element.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks-5';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooks5Element.is, IconRoundLooks5Element);

export default IconRoundLooks5Element;
