import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewQuiltElement
 * @class IconRoundViewQuiltElement
 * @extends {AoflElement}
 */
class IconRoundViewQuiltElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewQuiltElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-quilt';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewQuiltElement.is, IconRoundViewQuiltElement);

export default IconRoundViewQuiltElement;
