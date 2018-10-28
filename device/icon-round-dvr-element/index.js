import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundDvrElement
 * @class IconRoundDvrElement
 * @extends {AoflElement}
 */
class IconRoundDvrElement extends AoflElement {
  /**
   * Creates an instance of IconRoundDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundDvrElement.is, IconRoundDvrElement);

export default IconRoundDvrElement;
