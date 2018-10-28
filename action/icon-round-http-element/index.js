import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundHttpElement
 * @class IconRoundHttpElement
 * @extends {AoflElement}
 */
class IconRoundHttpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundHttpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-http';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundHttpElement.is, IconRoundHttpElement);

export default IconRoundHttpElement;
