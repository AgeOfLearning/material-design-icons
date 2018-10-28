import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundGetAppElement
 * @class IconRoundGetAppElement
 * @extends {AoflElement}
 */
class IconRoundGetAppElement extends AoflElement {
  /**
   * Creates an instance of IconRoundGetAppElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-get-app';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundGetAppElement.is, IconRoundGetAppElement);

export default IconRoundGetAppElement;
