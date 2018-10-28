import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFilterElement
 * @class IconRoundFilterElement
 * @extends {AoflElement}
 */
class IconRoundFilterElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFilterElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-filter';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFilterElement.is, IconRoundFilterElement);

export default IconRoundFilterElement;
