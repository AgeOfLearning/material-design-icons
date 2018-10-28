import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundFiberDvrElement
 * @class IconRoundFiberDvrElement
 * @extends {AoflElement}
 */
class IconRoundFiberDvrElement extends AoflElement {
  /**
   * Creates an instance of IconRoundFiberDvrElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-fiber-dvr';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundFiberDvrElement.is, IconRoundFiberDvrElement);

export default IconRoundFiberDvrElement;
