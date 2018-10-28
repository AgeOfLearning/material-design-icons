import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMenuElement
 * @class IconRoundMenuElement
 * @extends {AoflElement}
 */
class IconRoundMenuElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMenuElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-menu';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMenuElement.is, IconRoundMenuElement);

export default IconRoundMenuElement;
