import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPlusOneElement
 * @class IconRoundPlusOneElement
 * @extends {AoflElement}
 */
class IconRoundPlusOneElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPlusOneElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-plus-one';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPlusOneElement.is, IconRoundPlusOneElement);

export default IconRoundPlusOneElement;
