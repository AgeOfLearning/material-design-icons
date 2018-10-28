import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundCreateElement
 * @class IconRoundCreateElement
 * @extends {AoflElement}
 */
class IconRoundCreateElement extends AoflElement {
  /**
   * Creates an instance of IconRoundCreateElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-create';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundCreateElement.is, IconRoundCreateElement);

export default IconRoundCreateElement;
