import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundPanToolElement
 * @class IconRoundPanToolElement
 * @extends {AoflElement}
 */
class IconRoundPanToolElement extends AoflElement {
  /**
   * Creates an instance of IconRoundPanToolElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-pan-tool';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundPanToolElement.is, IconRoundPanToolElement);

export default IconRoundPanToolElement;
