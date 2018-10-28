import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundLooksElement
 * @class IconRoundLooksElement
 * @extends {AoflElement}
 */
class IconRoundLooksElement extends AoflElement {
  /**
   * Creates an instance of IconRoundLooksElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-looks';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundLooksElement.is, IconRoundLooksElement);

export default IconRoundLooksElement;
