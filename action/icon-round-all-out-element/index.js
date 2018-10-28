import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundAllOutElement
 * @class IconRoundAllOutElement
 * @extends {AoflElement}
 */
class IconRoundAllOutElement extends AoflElement {
  /**
   * Creates an instance of IconRoundAllOutElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-all-out';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundAllOutElement.is, IconRoundAllOutElement);

export default IconRoundAllOutElement;
