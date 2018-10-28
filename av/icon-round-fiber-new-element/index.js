import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFiberNewElement
 * @class IconRoundFiberNewElement
 * @extends {AoflElement}
 */
class IconRoundFiberNewElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFiberNewElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fiber-new';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFiberNewElement.is, IconRoundFiberNewElement);

export default IconRoundFiberNewElement;
