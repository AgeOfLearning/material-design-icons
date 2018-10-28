import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundThumbUpElement
 * @class IconRoundThumbUpElement
 * @extends {AoflElement}
 */
class IconRoundThumbUpElement extends AoflElement {
  /**
   * Creates an instance of IconRoundThumbUpElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-thumb-up';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundThumbUpElement.is, IconRoundThumbUpElement);

export default IconRoundThumbUpElement;
