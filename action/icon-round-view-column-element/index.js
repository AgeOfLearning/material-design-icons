import styles from './template.css';
import template from './template';
import AoflElement from '@aofl/web-components/aofl-element';

/**
 * @summary IconRoundViewColumnElement
 * @class IconRoundViewColumnElement
 * @extends {AoflElement}
 */
class IconRoundViewColumnElement extends AoflElement {
  /**
   * Creates an instance of IconRoundViewColumnElement.
   */
  constructor() {
    super();
  }

  /**
   * @readonly
   */
  static get is() {
    return 'icon-round-view-column';
  }

  /**
   *
   * @return {Object}
   */
  render() {
    return super.render(template, [styles]);
  }
}

window.customElements.define(IconRoundViewColumnElement.is, IconRoundViewColumnElement);

export default IconRoundViewColumnElement;
