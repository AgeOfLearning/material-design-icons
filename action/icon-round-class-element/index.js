import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundClassElement
 * @class IconRoundClassElement
 * @extends {AoflElement}
 */
class IconRoundClassElement extends AoflElement {
  /**
   * Creates an instance of IconRoundClassElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-class';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundClassElement.is, IconRoundClassElement);

export default IconRoundClassElement;
