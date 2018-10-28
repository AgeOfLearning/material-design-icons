import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundBookElement
 * @class IconRoundBookElement
 * @extends {AoflElement}
 */
class IconRoundBookElement extends AoflElement {
  /**
   * Creates an instance of IconRoundBookElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-book';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundBookElement.is, IconRoundBookElement);

export default IconRoundBookElement;
