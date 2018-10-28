import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundTollElement
 * @class IconRoundTollElement
 * @extends {AoflElement}
 */
class IconRoundTollElement extends AoflElement {
  /**
   * Creates an instance of IconRoundTollElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-toll';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundTollElement.is, IconRoundTollElement);

export default IconRoundTollElement;
