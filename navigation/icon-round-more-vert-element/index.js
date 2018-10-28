import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundMoreVertElement
 * @class IconRoundMoreVertElement
 * @extends {AoflElement}
 */
class IconRoundMoreVertElement extends AoflElement {
  /**
   * Creates an instance of IconRoundMoreVertElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-more-vert';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundMoreVertElement.is, IconRoundMoreVertElement);

export default IconRoundMoreVertElement;
