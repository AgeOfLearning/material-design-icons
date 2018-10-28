import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMarkunreadElement
 * @class IconRoundMarkunreadElement
 * @extends {AoflElement}
 */
class IconRoundMarkunreadElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMarkunreadElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-markunread';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMarkunreadElement.is, IconRoundMarkunreadElement);

export default IconRoundMarkunreadElement;
